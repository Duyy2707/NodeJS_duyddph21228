import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// const API_URI = "http://localhost:3001/users";
export const getAll = async (req, res) => {
  try {
    const { data:users} = await axios.get(`${process.env.API_URI}`);
    if (users.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
  // const res = await axios.get("http://localhost:3001/users")
  // const data = await res.data
};
export const get = async (req, res) => {
  try {
    const { data: user } = await axios.get(
      `${process.env.API_URI}/${req.params.id}`
    );
    if (!user) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "user found",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};
export const create = async (req, res) => {
  try {
    const { data: user } = await axios.post(
      `${process.env.API_URI}`,
      req.body
    );
    if (!user) {
      return res.status(400).json({
        message: "Không thể tạo sản phẩm",
      });
    }
    return res.status(201).json({
      message: "user created",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    await axios.delete(`${process.env.API_URI}/${req.params.id}`);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { data: user } = await axios.patch(
      `${process.env.API_URI}/${req.params.id}`,
      req.body
    );
    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Sản phẩm đã được cập nhật thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const put = async (req, res) => {
  try {
    const { data: user } = await axios.put(
      `${process.env.API_URI}/${req.params.id}`,
      req.body
    );
    console.log(data);
    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Sản phẩm đã được cập nhật thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};