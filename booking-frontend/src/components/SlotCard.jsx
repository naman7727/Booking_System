import axios from "axios";

const SlotCard = ({ slot, refresh }) => {
  const bookSlot = async () => {
    const user = prompt("Enter your name to book:");
    if (!user) return;

    try {
      await axios.post("http://localhost:5000/api/book", {
        slotId: slot.id,
        user
      });
      refresh();
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const unbookSlot = async () => {
    const confirm = window.confirm("Are you sure you want to unbook?");
    if (!confirm) return;

    try {
      await axios.post("http://localhost:5000/api/unbook", {
        slotId: slot.id
      });
      refresh();
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className={`p-6 rounded-xl shadow text-center
      ${slot.isBooked ? "bg-red-300" : "bg-green-300"}`}
    >
      <p className="text-lg font-semibold">{slot.court}</p>
      <p className="mb-2">{slot.time}</p>

      {slot.isBooked ? (
        <>
          <p className="text-sm mb-2">
            Booked by: <b>{slot.bookedBy}</b>
          </p>

          <button
            onClick={unbookSlot}
            className="w-full py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Unbook
          </button>
        </>
      ) : (
        <button
          onClick={bookSlot}
          className="w-full py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Book Now
        </button>
      )}
    </div>
  );
};

export default SlotCard;
