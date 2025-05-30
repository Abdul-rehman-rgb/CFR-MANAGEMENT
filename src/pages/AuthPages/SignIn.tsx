import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="CFR | ERP - Admin Dashboard"
        description="CFR | ERP - Admin Dashboard - ReactJs"
      />
      <AuthLayout imageSrc="/laptop.png">
  <SignInForm />
</AuthLayout>
    </>
  );
}
