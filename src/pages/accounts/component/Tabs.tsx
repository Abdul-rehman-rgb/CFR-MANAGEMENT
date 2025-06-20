import React, { useState } from "react";
import TabButtons from "./TabButtons";
import PaymentHistory from "./PaymentHistory";
import InvoiceSent from "./InvoiceSent";
import InvoiceReceived from "./InvoiceReceived";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Payment-History");

  const renderContent = () => {
    switch (activeTab) {
      case "Payment-History":
        return <PaymentHistory />;
        case "Invoice-Sent":
        return <InvoiceSent />;
        case "Invoice-Received":
        return <InvoiceReceived />;
      default:
        return null;
    }
  };

  return (
    <div>
      <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
