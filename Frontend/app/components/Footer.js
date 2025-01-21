import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/book-appointment" className="text-gray-600 hover:text-blue-600">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/prescriptions" className="text-gray-600 hover:text-blue-600">
                  Prescriptions
                </Link>
              </li>
              <li>
                <Link href="/health-resources" className="text-gray-600 hover:text-blue-600">
                  Health Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">123 Healthcare St, Medical City, HC 12345</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: info@healthcare.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">© 2023 HealthCare. All rights reserved.</div>
      </div>
    </footer>
  )
}

