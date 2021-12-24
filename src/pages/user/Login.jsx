import { Page, PageContent } from "components/layout/page";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validateEmail, validateNotEmpty, validateValue } from "helpers";
import useAuthStore from "store/useAuthStore";

export function Login() {
  const { login } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validate: (values) => {
      let errors = {};
      if (validateValue(values.email, validateNotEmpty)) {
        errors.email = "Email harus diisi";
      } else if (validateValue(values.email, validateEmail)) {
        errors.email = "Email tidak valid";
      }
      if (validateValue(values.password, validateNotEmpty)) {
        errors.password = "Kata sandi harus diisi";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await login(values);
      console.log(values);
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <Page>
      <PageContent>
        <div className="px-4 py-8 space-y-6 md:grid lg:px-8">
          <h1 className="text-2xl font-bold text-center sm:text-xl">Masuk</h1>
          <div class="form-control space-y-1">
            <h1 className="text-base text-center sm:text-xl">
              Belum punya akun?{" "}
              <span className="italic font-bold">
                {" "}
                <Link to="/user/signup">Daftar</Link>
              </span>
            </h1>

            <label class="label">
              <span class="label-text font-bold">E-mail</span>
            </label>
            <input
              type="text"
              placeholder="contoh@email.com"
              class="input input-bordered"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div class="text-red-600  rounded-md text-sm font-medium px-2 py-1">
                <div class="flex-1">
                  <label>{formik.errors.email}</label>
                </div>
              </div>
            ) : null}
            <label class="label">
              <span class="label-text font-bold">Kata Sandi</span>
            </label>
            <input
              type="password"
              placeholder="********"
              class="input input-bordered"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div class="text-red-600  rounded-md text-sm font-medium px-2 py-1">
                <div class="flex-1">
                  <label>{formik.errors.password}</label>
                </div>
              </div>
            ) : null}
            <label class="label">
              <a href="#" class="label-text-alt font-semibold text-gray-400">
                Lupa kata sandi?
              </a>
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-block"
            onClick={handleSubmit}
            disabled={
              formik.errors.email ||
              formik.values.password == "" ||
              formik.isSubmitting
            }
          >
            Masuk
          </button>
        </div>
      </PageContent>
    </Page>
  );
}
