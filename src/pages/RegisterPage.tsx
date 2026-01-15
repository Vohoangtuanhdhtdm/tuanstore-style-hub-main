import React, { useState, ChangeEvent, FormEvent } from 'react';

// Định nghĩa kiểu dữ liệu cho Form
interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Định nghĩa kiểu dữ liệu cho lỗi
interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Xử lý thay đổi input chung cho tất cả các trường
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Xóa lỗi khi người dùng bắt đầu gõ lại
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Hàm kiểm tra hợp lệ
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email không hợp lệ';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Xử lý submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsLoading(true);

    // Giả lập gọi API đăng ký
    console.log('Đang đăng ký user:', formData);

    setTimeout(() => {
      setIsLoading(false);
      alert('Đăng ký tài khoản thành công!');
      // Ở đây thường sẽ redirect về trang login hoặc trang chủ
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Tạo tài khoản mới
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Đã có tài khoản?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Đăng nhập ngay
            </a>
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
			
			<label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Nguyễn Văn A"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Địa chỉ Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="vidu@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className={`appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Xác nhận mật khẩu
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
				className={`appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Tôi đồng ý với <a href="#" className="text-indigo-600 hover:text-indigo-500">Điều khoản dịch vụ</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Đang tạo tài khoản...' : 'Đăng ký'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;