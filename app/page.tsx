import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Your Health, Our Priority</h1>
            <p className="text-xl text-gray-600 mb-6">
              Book appointments with top doctors and manage your health easily.
            </p>
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Appointment
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-66139.jpg?t=st=1737430173~exp=1737433773~hmac=9c89da9c78105f0a9dc69f9398ed27a844d099f34e779bcd5d80cd63e984db8b&w=826"
              alt="Healthcare professionals"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/book-appointment"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600">Schedule a visit with our expert doctors.</p>
            </Link>
            <Link
              href="/prescriptions"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Prescriptions</h3>
              <p className="text-gray-600">Access and manage your prescriptions easily.</p>
            </Link>
            <Link
              href="/health-resources"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Health Resources</h3>
              <p className="text-gray-600">Explore our library of health information.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "The care I received was exceptional. The doctors were knowledgeable and compassionate."
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/patient-${i}.jpg`}
                    alt={`Patient ${i}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-gray-500 text-sm">Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

