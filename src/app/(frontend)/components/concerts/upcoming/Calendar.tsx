const Calendar = () => (
  <section className="w-full flex flex-col items-center justify-center py-8 bg-[var(--cream)]">
    <div
      className="w-full max-w-5xl aspect-[3/2] rounded-lg overflow-hidden shadow-lg"
      style={{ minHeight: 600 }}
    >
      <iframe
        src="https://calendar.google.com/calendar/embed?src=ausco.manage@gmail.com&ctz=Pacific/Auckland"
        style={{ border: 0, width: "100%", height: "100%" }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      />
    </div>
  </section>
);

export default Calendar;
