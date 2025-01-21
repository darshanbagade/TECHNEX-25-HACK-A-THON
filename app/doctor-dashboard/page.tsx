import Link from "next/link"

export default function DoctorDashboard() {
  // This is a mock-up. In a real application, you'd fetch this data from your backend.
  const upcomingAppointments = [
    { id: 1, patient: "John Doe", date: "2023-06-15", time: "10:00 AM" },
    { id: 2, patient: "Jane Smith", date: "2023-06-20", time: "2:00 PM" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Doctor Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white shadow rounded-lg p-4 mb-4">
              <p className="font-semibold">{appointment.patient}</p>
              <p>
                {appointment.date} at {appointment.time}
              </p>
            </div>
          ))}
          <Link href="/manage-appointments" className="text-blue-600 hover:underline">
            Manage appointments
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link href="/patient-records" className="block bg-blue-100 text-blue-700 rounded-lg p-4 hover:bg-blue-200">
              View Patient Records
            </Link>
            <Link href="/prescriptions" className="block bg-green-100 text-green-700 rounded-lg p-4 hover:bg-green-200">
              Write Prescriptions
            </Link>
            <Link
              href="/telemedicine"
              className="block bg-yellow-100 text-yellow-700 rounded-lg p-4 hover:bg-yellow-200"
            >
              Start Telemedicine Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

