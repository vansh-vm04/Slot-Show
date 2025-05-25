-- db commands
CREATE TABLE Booking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  userid UUID NOT NULL,
  theatreid UUID,        
  movieid UUID,          
  eventid UUID,          
  seat VARCHAR(10),      
  price INTEGER NOT NULL,
  status VARCHAR(50) NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_booking_userid ON Booking(userid);
CREATE INDEX IF NOT EXISTS idx_booking_movieid ON Booking(movieid);