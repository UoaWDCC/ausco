const Calendar = () => (
  <section className="w-full bg-[var(--cream)]">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:p-16">
      <div className="w-full h-[400px] md:h-[700px] rounded-xl overflow-hidden">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=ausco.manage@gmail.com&ctz=Pacific/Auckland"
          style={{ border: 0, width: "100%", height: "100%" }}
          title="Google Calendar"
        />
      </div>
    </div>
  </section>
);

export default Calendar;
