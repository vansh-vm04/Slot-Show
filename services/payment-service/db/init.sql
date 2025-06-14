CREATE TABLE Payment(
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
booking_id UUID NOT NULL REFERENCES Booking(id) ON DELETE CASCADE,
user_id UUID NOT NULL,
payment_gateway VARCHAR(50) NOT NULL,          -- e.g., 'stripe', 'razorpay'
payment_id VARCHAR(100) NOT NULL UNIQUE,       -- Razorpay/Stripe payment ID
amount INTEGER NOT NULL,                       -- In paisa or cents (to avoid float)
currency VARCHAR(10) DEFAULT 'INR',            -- Currency code
status VARCHAR(50) NOT NULL,                   -- 'pending', 'successful', 'failed', 'refunded'
method VARCHAR(50),                            -- e.g., 'card', 'UPI', 'netbanking'
receipt_url TEXT,                              -- URL from Stripe/Razorpay
paid_at TIMESTAMP,                             -- Time of payment confirmation
created_at TIMESTAMP DEFAULT NOW(),            -- Record creation time
updated_at TIMESTAMP DEFAULT NOW()
);