import LoginForm from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-[900px] flex-col bg-gray-50">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
    </div>
  );
}
