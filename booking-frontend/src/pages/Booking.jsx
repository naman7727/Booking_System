import { useEffect, useState } from "react";
import axios from "axios";
import SlotCard from "../components/SlotCard";

const Booking = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSlots = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/slots");
      setSlots(res.data);
    } catch (error) {
      alert("Failed to load slots");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 to-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Turf / Court Booking
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading slots...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {slots.map(slot => (
            <SlotCard
              key={slot.id}
              slot={slot}
              refresh={fetchSlots}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
