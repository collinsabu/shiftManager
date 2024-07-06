import { useState, useEffect } from 'react';

const fetchClockInData = async () => {
  try {
    const res = await fetch("https://shift-manager-eight.vercel.app/api/clockin", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch clock-in data");
    }

    const data = await res.json();
    return data.clockins; // Ensure this matches the response structure from the API
  } catch (error) {
    console.log("Error loading clock-in data: ", error);
    return [];
  }
};

export default function MonthlyEarning() {
  const [monthlyTotalEarnings, setMonthlyTotalEarnings] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function calculateMonthlyEarnings() {
      setLoading(true); // Set loading to true before fetching data
      const clockIns = await fetchClockInData();

      // Ensure clockIns is defined before processing
      if (clockIns) {
        // Get current month and year
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        // Calculate total earnings for the current month
        let totalEarnings = 0;
        clockIns.forEach(clockIn => {
          const clockInDate = new Date(clockIn.clockInTime);
          const clockInMonth = clockInDate.getMonth();
          const clockInYear = clockInDate.getFullYear();

          // Check if the clock-in is within the current month and year
          if (clockInMonth === currentMonth && clockInYear === currentYear) {
            totalEarnings += clockIn.hourlyRate * 12; // Assuming each clock-in is 12 hours
          }
        });

        setMonthlyTotalEarnings(totalEarnings); // Updating the total earnings variable
      }
      setLoading(false); // Set loading to false after data is processed
    }

    calculateMonthlyEarnings();
  }, []);

  if (loading) {
    return <div  className="text-[14px] font-semibold">Loading...</div>; // Loading indicator
  }

  return (
    <div>£{monthlyTotalEarnings}</div>
  );
}
