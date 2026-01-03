const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "../data/slots.json");

const readSlots = () => {
  return JSON.parse(fs.readFileSync(dataPath));
};

const writeSlots = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

router.get("/slots", (req, res) => {
  res.json(readSlots());
});

router.post("/book", (req, res) => {
  const { slotId, user } = req.body;

  if (!slotId || !user) {
    return res.status(400).json({ message: "slotId and user required" });
  }

  const slots = readSlots();
  const slot = slots.find(s => s.id === slotId);

  if (!slot) return res.status(404).json({ message: "Slot not found" });
  if (slot.isBooked) return res.status(400).json({ message: "Already booked" });

  slot.isBooked = true;
  slot.bookedBy = user;

  writeSlots(slots);

  res.json({ message: "Slot booked", slot });
});
// UNBOOK SLOT
router.post("/unbook", (req, res) => {
  const { slotId } = req.body;

  if (!slotId) {
    return res.status(400).json({ message: "slotId is required" });
  }

  const slots = readSlots();
  const slot = slots.find(s => s.id === slotId);

  if (!slot) {
    return res.status(404).json({ message: "Slot not found" });
  }

  if (!slot.isBooked) {
    return res.status(400).json({ message: "Slot is already available" });
  }

  slot.isBooked = false;
  slot.bookedBy = null;

  writeSlots(slots);

  res.json({
    message: "Slot unbooked successfully",
    slot
  });
});



module.exports = router;
