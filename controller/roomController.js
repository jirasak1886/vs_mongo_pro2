const Room = require("../models/room");

exports.getrooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getroomID = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.postrooms = async (req, res) => {
    try {
        const { date_time, time_in, time_out,room_name,tool_name,user_name,phone,objective,adviser } = req.body;
        const room = new Room({ date_time, time_in, time_out,room_name,tool_name,user_name,phone,objective,adviser });
        const savedRoom = await room.save();
        res.status(201).json(savedRoom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateroom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);
        if (!room) return res.status(404).json({ message: 'room not found' });
        const update = req.body;
        Object.assign(room, update);
        const updatedRoom = await room.save();
        res.json(updatedRoom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteroom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);
        if (!room) return res.status(404).json({ message: 'room not found' });
        await Room.findByIdAndDelete(id);
        res.json({ message: 'room deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};