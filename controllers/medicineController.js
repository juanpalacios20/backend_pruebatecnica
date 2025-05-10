const Medicine = require("../models/medicine");

exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.findAll();
    return res.status(200).json(medicines);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener los medicamentos" });
  }
};

exports.getMedicineById = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await Medicine.findByPk(id);
    if (!medicine) {
      return res.status(404).json({ error: "Medicamento no encontrado" });
    }
    res.status(200).json(medicine);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el medicamento" });
  }
};

exports.createMedicine = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ error: "El nombre del medicamento es requerido" });
  }
  try {
    const newMedicine = await Medicine.create({ medicineName: name });
    res.status(201).json(newMedicine);
  } catch (error) {
    console.error("Error al crear el medicamento:", error);
    res.status(500).json({ error: "Error al crear el medicamento" });
  }
};

exports.updateMedicine = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ error: "El nombre del medicamento es requerido" });
  }
  try {
    const medicine = await Medicine.findByPk(id);
    if (!medicine) {
      return res.status(404).json({ error: "Medicamento no encontrado" });
    }
    medicine.medicineName = name;
    await medicine.save();
    res.status(200).json(medicine);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el medicamento" });
  }
};

exports.deleteMedicine = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await Medicine.findByPk(id);
    if (!medicine) {
      return res.status(404).json({ error: "Medicamento no encontrado" });
    }
    await medicine.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el medicamento" });
  }
};
