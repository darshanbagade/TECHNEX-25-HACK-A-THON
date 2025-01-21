import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          HealthCare
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <span className="text-gray-600">Contact: (555) 123-4567</span>
            </li>
            <li>
              <Link href="/patient-dashboard" className="text-gray-600 hover:text-blue-600">
                Patient Dashboard
              </Link>
            </li>
            <li>
              <Link href="/doctor-dashboard" className="text-gray-600 hover:text-blue-600">
                Doctor Dashboard
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Login
          </Link>
          <Link href="/get-started" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

