export interface InvoiceItemInterface extends Document {
  invoice_id: number;
  product_id: number;
  quantity: number;
}
