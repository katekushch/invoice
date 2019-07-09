export interface InvoiceItemInterface extends Document {
  invoice_id: string;
  product_id: string;
  quantity: number;
}
