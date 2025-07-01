import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Space,
  Typography,
  Spin,
  message,
  Modal,
  Button,
  Menu,
  Dropdown,
} from "antd";
import { SearchOutlined, PlusOutlined, MoreOutlined } from "@ant-design/icons";
import {
  fetchAllProducts,
  updateProduct,
  createProduct,
  softDeleteProduct,
  restoreProduct,
} from "../../services/admin/productql.serive";

const { Text } = Typography;

interface Product {
  _id: string;
  name: string;
  description?: string;
  brand_id?: string;
  category_id?: string;
  price: number;
  total_stock: number;
  createdAt?: string;
  updatedAt?: string;
  image_url?: string;
  deleted_at?: string;
}

const ProductQl: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editValues, setEditValues] = useState({
    name: "",
    price: 0,
    image_url: "",
    total_stock: 0,
    description: "",
    brand_id: "",
    category_id: "",
  });
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    brand_id: "",
    category_id: "",
    price: 0,
    total_stock: 0,
    image_url: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchAllProducts();
      if (data?.data && Array.isArray(data.data)) {
        setProducts(data.data);
      } else {
        setProducts([]);
      }
    } catch {
      message.error("Failed to load products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((item) =>
    item.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setEditValues({
      name: product.name,
      price: product.price,
      image_url: product.image_url || "",
      total_stock: product.total_stock,
      description: product.description || "",
      brand_id: product.brand_id || "",
      category_id: product.category_id || "",
    });
  };

  const handleUpdate = async () => {
    if (editingProduct) {
      try {
        await updateProduct(editingProduct._id, editValues);
        message.success("Product updated successfully!");
        setEditingProduct(null);
        loadData();
      } catch {
        message.error("Update failed!");
      }
    }
  };

  const handleCreate = async () => {
    if (!newProduct.name || newProduct.price <= 0 || newProduct.total_stock <= 0) {
      message.warning("Please fill in name, price (>0) and total stock (>0)");
      return;
    }
    try {
      await createProduct(newProduct);
      message.success("Product created successfully!");
      setAddModalVisible(false);
      setNewProduct({
        name: "",
        description: "",
        brand_id: "",
        category_id: "",
        price: 0,
        total_stock: 0,
        image_url: "",
      });
      loadData();
    } catch {
      message.error("Create failed!");
    }
  };

  const handleSoftDelete = async (productId: string) => {
    try {
      await softDeleteProduct(productId);
      message.success("Product soft-deleted");
      loadData();
    } catch {
      message.error("Failed to soft delete product");
    }
  };

  const handleRestore = async (productId: string) => {
    try {
      await restoreProduct(productId);
      message.success("Product restored");
      loadData();
    } catch {
      message.error("Failed to restore product");
    }
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      render: (text: string, record: Product) => (
        <Space>
          {record.image_url && (
            <img
              src={record.image_url}
              alt={text}
              style={{ width: 30, height: 30, objectFit: "cover" }}
            />
          )}
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Stock",
      dataIndex: "total_stock",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_: any, record: Product) => {
        const menu = (
          <Menu>
            <Menu.Item key="edit" onClick={() => handleEdit(record)}>
              ✏️ Edit
            </Menu.Item>
            {record.deleted_at ? (
              <Menu.Item key="restore" onClick={() => handleRestore(record._id)}>
                ♻️ Restore
              </Menu.Item>
            ) : (
              <Menu.Item key="softDelete" onClick={() => handleSoftDelete(record._id)}>
                🗑️ Soft Delete
              </Menu.Item>
            )}
          </Menu>
        );
        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div style={{ padding: 24, background: "#f9fafc" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 600 }}>Inventory Items</Text>
        <div style={{ display: "flex", gap: 8 }}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by product name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 220, minWidth: 150 }}
            size="middle"
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setAddModalVisible(true);
              setNewProduct({
                name: "",
                description: "",
                brand_id: "",
                category_id: "",
                price: 0,
                total_stock: 0,
                image_url: "",
              });
            }}
          >
            Add New Product
          </Button>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table
          rowKey="_id"
          columns={columns}
          dataSource={filteredProducts}
          scroll={{ x: "max-content" }}
          pagination={{ pageSize: 10, showSizeChanger: false }}
        />
      )}

      <Modal
        title="Edit Product"
        open={!!editingProduct}
        onCancel={() => setEditingProduct(null)}
        onOk={handleUpdate}
        okText="Update"
      >
        {Object.entries(editValues).map(([key, value]) => (
          <Input
            key={key}
            placeholder={key.replace("_", " ").toUpperCase()}
            type={typeof value === "number" ? "number" : "text"}
            value={value}
            onChange={(e) =>
              setEditValues({
                ...editValues,
                [key]: typeof value === "number" ? Number(e.target.value) : e.target.value,
              })
            }
            style={{ marginBottom: 12 }}
          />
        ))}
      </Modal>

      <Modal
        title="Add New Product"
        open={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        onOk={handleCreate}
        okText="Create"
      >
        {Object.entries(newProduct).map(([key, value]) => (
          <div key={key} style={{ marginBottom: 12 }}>
            <Input
              placeholder={key.replace("_", " ").toUpperCase()}
              type={typeof value === "number" ? "number" : "text"}
              value={value}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  [key]: typeof value === "number" ? Number(e.target.value) : e.target.value,
                })
              }
            />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default ProductQl;
