import Link from "next/link"

export default function PatientDashboard() {
  // This is mock data. In a real application, you'd fetch this data from your backend.
  const patientInfo = {
    name: "John Doe",
    age: 35,
    gender: "Male",
    bloodType: "A+",
    height: "180 cm",
    weight: "75 kg",
  }

  const medicalHistory = [
    { date: "2023-01-15", diagnosis: "Common Cold", treatment: "Rest and fluids" },
    { date: "2022-11-20", diagnosis: "Sprained Ankle", treatment: "RICE therapy and pain medication" },
    { date: "2022-08-05", diagnosis: "Allergic Reaction", treatment: "Antihistamines" },
  ]

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Smith", date: "2023-06-15", time: "10:00 AM" },
    { id: 2, doctor: "Dr. Johnson", date: "2023-06-20", time: "2:00 PM" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Patient Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="bg-white shadow rounded-lg p-6">
            {Object.entries(patientInfo).map(([key, value]) => (
              <p key={key} className="mb-2">
                <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white shadow rounded-lg p-4 mb-4">
              <p className="font-semibold">{appointment.doctor}</p>
              <p>
                {appointment.date} at {appointment.time}
              </p>
            </div>
          ))}
          <Link href="/book-appointment" className="text-blue-600 hover:underline">
            Book a new appointment
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Medical History</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Diagnosis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Treatment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {medicalHistory.map((record, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.diagnosis}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/prescriptions" className="block bg-blue-100 text-blue-700 rounded-lg p-4 hover:bg-blue-200">
            View Prescriptions
          </Link>
          <Link href="/test-results" className="block bg-green-100 text-green-700 rounded-lg p-4 hover:bg-green-200">
            View Test Results
          </Link>
          <Link
            href="/health-resources"
            className="block bg-yellow-100 text-yellow-700 rounded-lg p-4 hover:bg-yellow-200"
          >
            Health Resources
          </Link>
        </div>
      </div>
    </div>
  )
}

