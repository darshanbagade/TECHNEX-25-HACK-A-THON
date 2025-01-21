import React from "react"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading healthcare provider, revolutionizing patient care through innovative technology and
            compassionate service. We envision a world where quality healthcare is accessible to all, empowering
            individuals to lead healthier, happier lives.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">Our mission is to deliver exceptional, patient-centered healthcare by:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Providing cutting-edge medical services and technology</li>
            <li>Fostering a culture of continuous learning and improvement</li>
            <li>Promoting health education and preventive care</li>
            <li>Ensuring a compassionate and supportive environment for patients and staff</li>
            <li>Collaborating with communities to address local health challenges</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-700">We strive for the highest standards in all aspects of our work.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-700">We treat every patient with empathy, dignity, and respect.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-700">We embrace new ideas and technologies to improve patient care.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

