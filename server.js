import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Allow ALL origins for CORS
app.use(cors({
  origin: '*',
  credentials: true,
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

/* ============================
     IMPORT ROUTES
============================ */

// ERP Modules
import clientRoutes from './routes/clientRoutes.js';
import createInvoiceRoutes from './routes/createInvoice.js'; // ✅ createInvoice.js route
import viewInvoicesRoutes from './routes/viewInvoice.js';   // ✅ viewInvoice.js route
import paymentEntryRoutes from './routes/paymentEntryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import purchaseOrderRoutes from './routes/purchaseOrderRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import stockInRoutes from './routes/stockInRoutes.js';
import stockOutRoutes from './routes/stockOutRoutes.js';
import userRoutes from './routes/userRoutes.js';
import vendorRoutes from './routes/vendorRoutes.js';

// Supplier Portal Modules
import acknowledgeSchedulesRoutes from './routes/supplierPortal/acknowledgeSchedulesRoutes.js';
import agreementsRoutes from './routes/supplierPortal/agreementsRoutes.js';
import createASBNRoutes from './routes/supplierPortal/createASBNRoutes.js';
import createASNRoutes from './routes/supplierPortal/createASNRoutes.js';
import createInvoiceNoPoRoutes from './routes/supplierPortal/createInvoiceNoPoRoutes.js';
import createInvoiceRoutesSupplier from './routes/supplierPortal/createInvoiceRoutes.js';
import manageAgreementsRoutes from './routes/supplierPortal/manageAgreementsRoutes.js';
import manageOrdersRoutes from './routes/supplierPortal/manageOrdersRoutes.js';
import manageProfileRoutes from './routes/supplierPortal/manageProfileRoutes.js';
import manageSchedulesRoutes from './routes/supplierPortal/manageSchedulesRoutes.js';
import manageShipmentsRoutes from './routes/supplierPortal/manageShipmentsRoutes.js';
import ordersViewRoutes from './routes/supplierPortal/ordersViewRoutes.js';
import returnsRoutes from './routes/supplierPortal/returnsRoutes.js';
import reviewConsumptionRoutes from './routes/supplierPortal/reviewConsumptionRoutes.js';
import uploadASNRoutes from './routes/supplierPortal/uploadASNRoutes.js';
import viewInvoicesRoutesSupplier from './routes/supplierPortal/viewInvoicesRoutes.js';
import viewPaymentsRoutes from './routes/supplierPortal/viewPaymentsRoutes.js';
import viewReceiptsRoutes from './routes/supplierPortal/viewReceiptsRoutes.js';

/* ============================
     APPLY ROUTES
============================ */

// ERP Routes
app.use('/api/client', clientRoutes);
app.use('/api/invoice', createInvoiceRoutes);   // ✅ Custom create invoice
app.use('/api/invoice/view', viewInvoicesRoutes);      // ✅ Custom view invoice
app.use('/api/payment-entry', paymentEntryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/purchase-orders', purchaseOrderRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/stock-in', stockInRoutes);
app.use('/api/stock-out', stockOutRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vendors', vendorRoutes);

// Supplier Portal Routes
app.use('/api/supplier/acknowledge-schedules', acknowledgeSchedulesRoutes);
app.use('/api/supplier/agreements', agreementsRoutes);
app.use('/api/supplier/create-asbn', createASBNRoutes);
app.use('/api/supplier/create-asn', createASNRoutes);
app.use('/api/supplier/create-invoice-no-po', createInvoiceNoPoRoutes);
app.use('/api/supplier/create-invoice', createInvoiceRoutesSupplier);
app.use('/api/supplier/manage-agreements', manageAgreementsRoutes);
app.use('/api/supplier/manage-orders', manageOrdersRoutes);
app.use('/api/supplier/manage-profile', manageProfileRoutes);
app.use('/api/supplier/manage-schedules', manageSchedulesRoutes);
app.use('/api/supplier/manage-shipments', manageShipmentsRoutes);
app.use('/api/supplier/orders-view', ordersViewRoutes);
app.use('/api/supplier/returns', returnsRoutes);
app.use('/api/supplier/review-consumption', reviewConsumptionRoutes);
app.use('/api/supplier/upload-asn', uploadASNRoutes);
app.use('/api/supplier/view-invoices', viewInvoicesRoutesSupplier);
app.use('/api/supplier/view-payments', viewPaymentsRoutes);
app.use('/api/supplier/view-receipts', viewReceiptsRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
