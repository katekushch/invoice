import mongoose from 'mongoose';
import { Promise as BBPromise } from 'bluebird'

import Invoice from './invoice.model';
import InvoiceItem from './invoice-items/invoice-item.model';
import { InvoiceItemInterface } from './invoice-items/invoice-item.interface';

export function getInvoicesFromBD() {
  return Invoice.find();
}

export async function addInvoiceToDB(invoice) {
  const newEntity = new Invoice(invoice);
  await BBPromise.map(invoice.items, (invoiceItem: InvoiceItemInterface) => {
    invoiceItem.invoice_id = newEntity._id;
    const newInvoiceItem = new InvoiceItem(invoiceItem);
    return newInvoiceItem.save();
  });
  await newEntity.save();
  const total = await this.countTotal(newEntity._id, newEntity.discount);
  return {
    ...newEntity.toObject(),
    total: total,
  };
}

export async function updateInvoiceInDB(invoiceId, updatedOptions) {
  await BBPromise.filter(await InvoiceItem.find({}), (item: any) => item.invoice_id.equals(invoiceId))
  .map((invoiceItem: any) => {
    const foundedItem = updatedOptions.items.find((item) => invoiceItem._id.equals(item._id));
    if (foundedItem) {
      return InvoiceItem.findByIdAndUpdate(foundedItem._id, foundedItem, {new: true});
    } else {
      return invoiceItem.remove();
    }
  });
  const filteredItems = updatedOptions.items.filter((item) => !item._id);
  await BBPromise.map(filteredItems, (invoiceItem: InvoiceItemInterface) => {
    invoiceItem.invoice_id = invoiceId;
    const newInvoiceItem = new InvoiceItem(invoiceItem);
    return newInvoiceItem.save();
  });
  return Invoice.findByIdAndUpdate(invoiceId, updatedOptions, {new: true});
}

export function deleteInvoiceFromDB(invoice) {
  return invoice.remove();
}


export async function countTotal(invoice_id, discount): Promise<number> {
  const [total] = await InvoiceItem.aggregate([
    {
      $match: {invoice_id: mongoose.Types.ObjectId(invoice_id)}
    },
    {
      $lookup: {
        from: 'products',
        localField: 'product_id',
        foreignField: '_id',
        as: 'product'
      },
    },
    {$unwind: '$product'},
    {
      $addFields:
        {
          cost: {
            $multiply: ['$product.price', '$quantity'],
          },
        }
    },
    {
      $group: {
        _id: invoice_id,
        totalsArray: {$push: '$cost'}
      }
    },
    {
      $addFields: {
        totalWithoutDiscount: {
          $reduce: {
            input: '$totalsArray',
            initialValue: 0,
            in: {$sum: ['$$value', '$$this']}
          }
        }
      }
    },
    {
      $project: {
        total: {
          $multiply: ['$totalWithoutDiscount', 1 - discount / 100]
        },
      }
    }
  ]);
  return total.total;
}

