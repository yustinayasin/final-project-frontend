import { Page, PageContent } from "components/layout/page";
import { NotFoundSvg } from "components/ui/svg";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Page>
      <PageContent>
        <div className="px-4 py-2 sm:px-6 sm:py-2 md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto py-16 sm:py-12">
            <NotFoundSvg />
            <div className="sm:flex">
              <div className="sm:ml-6">
                <div className="sm:border-gray-200 sm:border-l sm:pl-6">
                  <h1 className="font-extrabold text-4xl text-gray-900 tracking-tight sm:text-5xl dark:text-gray-100">
                    Halaman tidak ditemukan
                  </h1>
                  <p className="mt-1 text-base text-gray-500">
                    Coba periksa kembali <strong>Alamat Web</strong> yang anda
                    masukkan dan coba lagi.
                  </p>
                </div>
                <div className="flex mt-6 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link to="/">
                    <a className="font-medium text-base text-emerald-600">
                      <span aria-hidden="true"> &larr;</span> Kembali ke halaman
                      utama
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}
