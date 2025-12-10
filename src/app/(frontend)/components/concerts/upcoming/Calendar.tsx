const Calendar = () => (
  <section className="w-full max-w-6xl mx-auto rounded-lg">
    <div className="w-full h-[400px] md:h-[700px] rounded-xl overflow-hidden">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=ausco.manage@gmail.com&ctz=Pacific/Auckland"
        style={{ border: 0, width: "100%", height: "100%" }}
        title="Google Calendar"
      />
    </div>
  </section>
);

export default Calendar;
