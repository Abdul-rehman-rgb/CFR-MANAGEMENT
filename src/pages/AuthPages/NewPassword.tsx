import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import NewPassword from "../../components/auth/NewPassword";

export default function NewPasswordForm() {
  return (
    <>
      <PageMeta
        title="CFR | ERP - Admin Dashboard"
        description="CFR | ERP - Admin Dashboard - ReactJs"
      />
      <AuthLayout imageSrc="/laptop.png">
    <NewPassword />
</AuthLayout>
    </>
  );
}
