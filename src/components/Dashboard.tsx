import { Button } from "primereact/button";
import { Column, ColumnBodyOptions } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const metrics: any[] = [
  {
    title: "Orders",
    icon: "pi pi-shopping-cart",
    color_light: "#64B5F6",
    color_dark: "#1976D2",
    textContent: [
      { amount: "640", text: "Pending" },
      { amount: "1420", text: "Completed" },
    ],
  },
  {
    title: "Revenue",
    icon: "pi pi-dollar",
    color_light: "#7986CB",
    color_dark: "#303F9F",
    textContent: [
      { amount: "$2,100", text: "Expenses" },
      { amount: "$9,640", text: "Income" },
    ],
  },
  {
    title: "Customers",
    icon: "pi pi-users",
    color_light: "#4DB6AC",
    color_dark: "#00796B",
    textContent: [
      { amount: "8272", text: "Active" },
      { amount: "25402", text: "Registered" },
    ],
  },
  {
    title: "Comments",
    icon: "pi pi-users",
    color_light: "#4DD0E1",
    color_dark: "#0097A7",
    textContent: [
      { amount: "12", text: "New" },
      { amount: "85", text: "Responded" },
    ],
  },
];



const Dashboard = () => {
  const orderWeek = [
    { name: "This Week", code: "1" },
    { name: "Last Week", code: "0" },
  ];

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

  const [selectedOrderWeek] = useState(orderWeek[0]);
  const [products] = useState(data);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const bodyTemplate = (data: any, props: ColumnBodyOptions) => {
    return <>{data[props.field]}</>;
  };

  const statusBodyTemplate = (data: any) => {
    return (
      <>
        <span className="p-column-title">Status</span>
        <span
          className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}
        >
          {data.inventoryStatus}
        </span>
      </>
    );
  };

  const priceBodyTemplate = (data: any) => {
    return (
      <>
        <span className="p-column-title">Price</span>
        {formatCurrency(data.price as number)}
      </>
    );
  };

  return (
    <div className="layout-dashboard">
      <div className="grid">
        {metrics.map((metric) => (
          <div className="col-12 md:col-6 xl:col-3" key={metric.title}>
            <div
              className="card shadow-1 flex flex-column"
              style={{
                color: metric.color_light,
                borderLeft: "4px solid",
              }}
            >
              <div className="flex align-items-center">
                <div
                  className="flex justify-content-center align-items-center p-2 border-round"
                  style={{ backgroundColor: metric.color_light }}
                >
                  <i
                    className={metric.icon}
                    style={{ color: metric.color_dark }}
                  />
                </div>
                <span
                  className="text-xl ml-2 font-semibold"
                  style={{ color: metric.color_light }}
                >
                  {metric.title}
                </span>
              </div>

              <div className="grid mt-3">
                {metric.textContent.map((content: any, i: any) => (
                  <div
                    className={`col-6 flex flex-column p-3 text-center ${
                      i === 0 ? "border-right-1 surface-border" : ""
                    }`}
                    key={i}
                  >
                    <span className="text-color text-2xl font-semibold">
                      {content.amount}
                    </span>
                    <span className="text-color font-semibold">
                      {content.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 ">
          <div className="card">
            <div className="flex justify-content-between">
              <h4>Recent Sales</h4>
              <Dropdown
                options={orderWeek}
                value={selectedOrderWeek}
                optionLabel="name"
                // onChange={recentSales}
                style={{ width: "9rem" }}
              ></Dropdown>
            </div>

            <p>Your sales activity over time.</p>

            <DataTable
              value={products}
              paginator={true}
              rows={5}
              responsiveLayout="scroll"
            >
              <Column
                field="id"
                body={bodyTemplate}
                header="ID"
                sortable={true}
                style={{ width: "10%", minWidth: "6rem" }}
              />
              <Column
                field="category"
                body={bodyTemplate}
                header="Category"
                sortable={true}
                style={{ width: "30%", minWidth: "10rem" }}
              />
              <Column
                field="price"
                body={priceBodyTemplate}
                header="Price"
                sortable={true}
                style={{ width: "20%", minWidth: "10rem" }}
              />
              <Column
                field="inventoryStatus"
                body={statusBodyTemplate}
                header="Status"
                sortable={true}
                style={{ width: "30%", minWidth: "10rem" }}
              />
              <Column
                headerStyle={{ width: "10%", minWidth: "6rem" }}
                body={() => <Button icon="pi pi-search"></Button>}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
