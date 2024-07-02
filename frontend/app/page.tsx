import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-50">
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">Welcome to Grow More Loan</h2>
        <p className="text-lg mb-8">Your trusted partner for all types of loans</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/home-loan.svg" alt="Home Loan" width={50} height={50} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Home Loan and Mortgage Loans</h3>
            <p className="mt-2">Get affordable home loans with low-interest rates.</p>
            <Link href="/home-loan">
              <div className="text-blue-500 mt-4 inline-block cursor-pointer">Apply Now</div>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/vehicle-loan.svg" alt="Vehicle Loan" width={50} height={50} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Vehicle Loans</h3>
            <p className="mt-2">Finance your new vehicle with our easy vehicle loans.</p>
            <Link href="/vehicle-loan">
              <div className="text-blue-500 mt-4 inline-block cursor-pointer">Apply Now</div>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/gold-loan.svg" alt="Gold Loan" width={50} height={50} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Gold Loan</h3>
            <p className="mt-2">Quick and hassle-free gold loans at competitive rates.</p>
            <Link href="/gold-loan">
              <div className="text-blue-500 mt-4 inline-block cursor-pointer">Apply Now</div>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/education-loan.svg" alt="Education Loan" width={50} height={50} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Educational Loan</h3>
            <p className="mt-2">Secure your future with our education loans.</p>
            <Link href="/education-loan">
              <div className="text-blue-500 mt-4 inline-block cursor-pointer">Apply Now</div>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/revenue-loan.svg" alt="Revenue Based" width={50} height={50} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Revenue Based Financing</h3>
            <p className="mt-2">Flexible financing solutions based on your revenue.</p>
            <Link href="/revenue-loan">
              <div className="text-blue-500 mt-4 inline-block cursor-pointer">Apply Now</div>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/venture-debt.svg" alt="Venture Debt" width={50} height={50} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Venture Debt</h3>
            <p className="mt-2">Funding for startups and emerging companies.</p>
            <Link href="/venture-debt">
              <div className="text-blue-500 mt-4 inline-block cursor-pointer">Apply Now</div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full bg-blue-600 text-white p-4 mt-12">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Grow More Loan. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
