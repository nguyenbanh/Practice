import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { useRef, useState } from "react";

const Crud = () => {
  let emptyProduct: any = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  const data = [
    {
      id: "3",
      code: "string",
      name: "fjdjfdf",
      description: "fdhkjfdf",
      image: "",
      price: 243434,
      category: "string",
      quantity: 23,
      inventoryStatus: "InventoryStatus",
      rating: 3,
      orders: [],
    },
    {
      id: "4",
      code: "string",
      name: "fjdjfdf",
      description: "fdhkjfdf",
      image: "",
      price: 243434,
      category: "string",
      quantity: 23,
      inventoryStatus: "InventoryStatus",
      rating: 3,
      orders: [],
    },
    {
      id: "5",
      code: "string",
      name: "fjdjfdf",
      description: "fdhkjfdf",
      image: "",
      price: 243434,
      category: "string",
      quantity: 23,
      inventoryStatus: "InventoryStatus",
      rating: 3,
      orders: [],
    },
  ];

  const [products, setProducts] = useState<any>(data);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const toast = useRef(null);
  const dt = useRef(null);

  const formatCurrency = (value: any) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };
      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
      } else {
        _product.id = createId();
        _product.code = createId();
        _product.image = "product-placeholder.svg";
        _products.push(_product);
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product: any) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product: any) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter((val: any) => val.id !== product.id);
    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
  };

  const findIndexById = (id: any) => {
    let index = -1;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };


  const deleteSelectedProducts = () => {};

  const onCategoryChange = (e: any) => {
    let _product = { ...product };
    _product["category"] = e.value;
    setProduct(_product);
  };

  const onInputChange = (e: any, name: any) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const onInputNumberChange = (e: any, name: any) => {
    const val = e.value || 0;
    let _product = { ...product };
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const codeBodyTemplate = (rowData: any) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.code}
      </>
    );
  };

  const nameBodyTemplate = (rowData: any) => {
    return (
      <>
        <span className="p-column-title">Name</span>
        {rowData.name}
      </>
    );
  };

  const imageBodyTemplate = (rowData: any) => {
    return (
      <>
        <span className="p-column-title">Image</span>
        <img
          src={`/demo/images/product/${rowData.image}`}
          alt={rowData.image}
          className="shadow-2"
          width="100"
        />
      </>
    );
  };

  const priceBodyTemplate = (rowData: any) => {
    return (
      <>
        <span className="p-column-title">Price</span>
        {formatCurrency(rowData.price)}
      </>
    );
  };

  const categoryBodyTemplate = (rowData: any) => {
    return (
      <>
        <span className="p-column-title">Category</span>
        {rowData.category}
      </>
    );
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <>
        <span className="p-column-title">Status</span>
        <span
          className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}
        >
          {rowData.inventoryStatus}
        </span>
      </>
    );
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          severity="success"
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          severity="warning"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </>
    );
  };



  const productDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" text onClick={saveProduct} />
    </>
  );
  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        text
        onClick={hideDeleteProductDialog}
      />
      <Button label="Yes" icon="pi pi-check" text onClick={deleteProduct} />
    </>
  );
  const deleteProductsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        text
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        text
        onClick={deleteSelectedProducts}
      />
    </>
  );

  return (
    <div className="grid crud-demo">
      <div className="col-12">
        <div className="card">
          <Toast ref={toast} />

          <div className="">
            <h5 className="m-0 mb-3">Manage Products</h5>
            <div className="my-3 text-right mr-0 flex gap-3">
              <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
              </IconField>
              <Button
                severity="info"
                label="New"
                icon="pi pi-plus"
                onClick={openNew}
              />
            </div>
          </div>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            className="datatable-responsive"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            emptyMessage="No products found."
     
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "4rem" }}
            ></Column>
            {/* <Column
              field="code"
              header="Code"
              sortable
              body={codeBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column> */}
            <Column
              field="name"
              header="Name"
              sortable
              body={nameBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            {/* <Column header="Image" body={imageBodyTemplate}></Column> */}
            <Column
              field="price"
              header="Price"
              body={priceBodyTemplate}
              sortable
            ></Column>
            <Column
              field="category"
              header="Category"
              sortable
              body={categoryBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="inventoryStatus"
              header="Status"
              body={statusBodyTemplate}
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
          </DataTable>

          <Dialog
            visible={productDialog}
            style={{ width: "450px" }}
            header="Product Details"
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
          >
            {product.image && (
              <img
                src={`/demo/images/product/${product.image}`}
                alt={product.image}
                width="150"
                className="mt-0 mx-auto mb-5 block shadow-2"
              />
            )}
            <div className="field">
              <label htmlFor="name">Name</label>
              <InputText
                id="name"
                value={product.name}
                onChange={(e) => onInputChange(e, "name")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && !product.name,
                })}
              />
              {submitted && !product.name && (
                <small className="p-invalid">Name is required.</small>
              )}
            </div>
            <div className="field">
              <label htmlFor="description">Description</label>
              <InputTextarea
                id="description"
                value={product.description}
                onChange={(e) => onInputChange(e, "description")}
                required
                rows={3}
                cols={20}
              />
            </div>

            <div className="field">
              <label className="mb-3">Category</label>
              <div className="formgrid grid">
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category1"
                    name="category"
                    value="Accessories"
                    onChange={onCategoryChange}
                    checked={product.category === "Accessories"}
                  />
                  <label htmlFor="category1">Accessories</label>
                </div>
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category2"
                    name="category"
                    value="Clothing"
                    onChange={onCategoryChange}
                    checked={product.category === "Clothing"}
                  />
                  <label htmlFor="category2">Clothing</label>
                </div>
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category3"
                    name="category"
                    value="Electronics"
                    onChange={onCategoryChange}
                    checked={product.category === "Electronics"}
                  />
                  <label htmlFor="category3">Electronics</label>
                </div>
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category4"
                    name="category"
                    value="Fitness"
                    onChange={onCategoryChange}
                    checked={product.category === "Fitness"}
                  />
                  <label htmlFor="category4">Fitness</label>
                </div>
              </div>
            </div>

            <div className="formgrid grid">
              <div className="field col">
                <label htmlFor="price">Price</label>
                <InputNumber
                  id="price"
                  value={product.price as number}
                  onValueChange={(e) => onInputNumberChange(e, "price")}
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                />
              </div>
              <div className="field col">
                <label htmlFor="quantity">Quantity</label>
                <InputNumber
                  id="quantity"
                  value={product.quantity}
                  onValueChange={(e) => onInputNumberChange(e, "quantity")}
                />
              </div>
            </div>
          </Dialog>

          <Dialog
            visible={deleteProductDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductDialogFooter}
            onHide={hideDeleteProductDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Are you sure you want to delete <b>{product.name}</b>?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteProductsDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductsDialogFooter}
            onHide={hideDeleteProductsDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Are you sure you want to delete the selected products?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Crud;
