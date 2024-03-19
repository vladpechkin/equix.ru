import config from "../config.json";
import { useState, useEffect } from "react";
import { Row, Col } from ".";
import { Layout } from "../Layout";
import { InputOption } from "../types";
import { getInputDate, getMonthAgo, fetchApi, getUrlWithParams, convertInputDateToIso, toOptions } from "../utils";
import { Box } from "./Box";
import { Input } from "./Input";

export const Dashboard = () => {
    const [clients, setClients] = useState(0);
    const [newClients, setNewClients] = useState(0);
    const [orders, setOrders] = useState(0);
    const [newOrders, setNewOrders] = useState(0);
    const [drivers, setDrivers] = useState(0);
    const [newDrivers, setNewDrivers] = useState(0);
    const [driversType, setDriversType] = useState<InputOption | undefined>();
  
    const [from, setFrom] = useState(getInputDate(getMonthAgo()));
    const [to, setTo] = useState(getInputDate(new Date()));
  
    const fetchStat = (
      endpoint: string,
      setter: (value: number) => void,
      params?: Object
    ) =>
      fetchApi(
        getUrlWithParams(`${endpoint}`, {
          from: convertInputDateToIso(from),
          to: convertInputDateToIso(to),
          ...params,
        })
      )
        .then((res) => res.json()).then(res => setter(res.data.total));
  
    const fetchData = () => {
      fetchStat("clients", setClients);
      fetchStat("clients", setNewClients, {
        type: "NEW",
      });
      fetchStat("orders", setOrders);
      fetchStat("orders", setNewOrders, {
        state: "NEW",
      });
      fetchStat(
        "drivers",
        setDrivers,
        driversType ? { type: driversType.name } : undefined
      );
      fetchStat("drivers", setNewDrivers, {
        ...(driversType ? { type: driversType.name } : {}),
        state: "NEW",
      });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <Layout className="p-4 gap-2">
        <Row className="flex-wrap items-center gap-2">
          <h1 className="font-semibold p-2">Statistics</h1>
          <Input
            type="date"
            label="From"
            value={from}
            onChange={setFrom}
            inline
          />
          <Input type="date" label="To" value={to} onChange={setTo} inline />
          <Box
            onClick={() => {
              fetchData();
            }}
          >
            Update
          </Box>
        </Row>
        <Row className="w-full h-full">
          <section className="w-full p-2 h-full border border-gray-100 rounded-lg">
            <h2 className="font-semibold">Clients</h2>
            <p>Total: {clients}</p>
            <p>New: {newClients}</p>
            <p>Percentage: {(newClients / clients * 100 || 0).toFixed(1)}%</p>
          </section>
          <section className="w-full p-2 h-full border border-gray-100 rounded-lg">
            <h2 className="font-semibold">Orders</h2>
            <p>Total: {orders}</p>
            <p>New: {newOrders}</p>
            <p>Percentage: {(newOrders / orders * 100 || 0).toFixed(1)}%</p>
            <p>Average rating: </p>
            <p>Funds: </p>
          </section>
          <Col className="w-full h-full p-2 border border-gray-100 rounded-lg">
            <h2 className="font-semibold">Drivers</h2>
            <div>
              <p>Total: {drivers}</p>
              <p>New: {newDrivers}</p>
              <p>
                Percentage: {(newDrivers / drivers * 100 || 0).toFixed(1)}%
              </p>
              <Input
                type="radio"
                label="By type"
                value={driversType}
                onChange={setDriversType}
                options={toOptions(Object.keys(config.enums.DriverType))}
              />
            </div>
          </Col>
        </Row>
      </Layout>
    );
  };