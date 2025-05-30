// import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ResetCode from "../../components/auth/ResetCode";

export default function ResetCodeForm() {
  return (
    <>
      {/* <PageMeta
        title="CFR | ERP - Admin Dashboard"
        description="CFR | ERP - Admin Dashboard - ReactJs"
      /> */}
      <AuthLayout imageSrc="/woman-laptop.png">
        <ResetCode />
      </AuthLayout>
    </>
  );
}
