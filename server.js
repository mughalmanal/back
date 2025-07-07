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

// CORS Setup
const allowedOrigins = [
  "https://front-git-main-manals-projects-114395d1.vercel.app",
  "https://front-lake-two.vercel.app",
  "https://front-git-main-manals-projects-114395d1.vercel.app/",
  "https://front-iur3hh0pk-manals-projects-114395d1.vercel.app/"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin'));
    }
  },
  credentials: true,
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ROUTES
import clientRoutes from './routes/clientRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import paymentEntryRoutes from './routes/paymentEntryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import purchaseOrderRoutes from './routes/purchaseOrderRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import stockInRoutes from './routes/stockInRoutes.js';
import stockOutRoutes from './routes/stockOutRoutes.js';
import userRoutes from './routes/userRoutes.js';
import vendorRoutes from './routes/vendorRoutes.js';

// Supplier Portal Routes
import acknowledgeSchedulesRoutes from './routes/supplierPortal/acknowledgeSchedulesRoutes.js';
import agreementsRoutes from './routes/supplierPortal/agreementsRoutes.js';
import createASBNRoutes from './routes/supplierPortal/createASBNRoutes.js';
import createASNRoutes from './routes/supplierPortal/createASNRoutes.js';
import createInvoiceNoPoRoutes from './routes/supplierPortal/createInvoiceNoPoRoutes.js';
import createInvoiceRoutes from './routes/supplierPortal/createInvoiceRoutes.js';
import manageAgreementsRoutes from './routes/supplierPortal/manageAgreementsRoutes.js';
import manageOrdersRoutes from './routes/supplierPortal/manageOrdersRoutes.js';
import manageProfileRoutes from './routes/supplierPortal/manageProfileRoutes.js';
import manageSchedulesRoutes from './routes/supplierPortal/manageSchedulesRoutes.js';
import manageShipmentsRoutes from './routes/supplierPortal/manageShipmentsRoutes.js';
import ordersViewRoutes from './routes/supplierPortal/ordersViewRoutes.js';
import returnsRoutes from './routes/supplierPortal/returnsRoutes.js';
import reviewConsumptionRoutes from './routes/supplierPortal/reviewConsumptionRoutes.js';
import uploadASNRoutes from './routes/supplierPortal/uploadASNRoutes.js';
import viewInvoicesRoutes from './routes/supplierPortal/viewInvoicesRoutes.js';
import viewPaymentsRoutes from './routes/supplierPortal/viewPaymentsRoutes.js';
import viewReceiptsRoutes from './routes/supplierPortal/viewReceiptsRoutes.js';

// Apply Routes
app.use('/api/client', clientRoutes);
app.use('/api/invoice', invoiceRoutes);
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
app.use('/api/supplier/create-invoice', createInvoiceRoutes);
app.use('/api/supplier/manage-agreements', manageAgreementsRoutes);
app.use('/api/supplier/manage-orders', manageOrdersRoutes);
app.use('/api/supplier/manage-profile', manageProfileRoutes);
app.use('/api/supplier/manage-schedules', manageSchedulesRoutes);
app.use('/api/supplier/manage-shipments', manageShipmentsRoutes);
app.use('/api/supplier/orders-view', ordersViewRoutes);
app.use('/api/supplier/returns', returnsRoutes);
app.use('/api/supplier/review-consumption', reviewConsumptionRoutes);
app.use('/api/supplier/upload-asn', uploadASNRoutes);
app.use('/api/supplier/view-invoices', viewInvoicesRoutes);
app.use('/api/supplier/view-payments', viewPaymentsRoutes);
app.use('/api/supplier/view-receipts', viewReceiptsRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
