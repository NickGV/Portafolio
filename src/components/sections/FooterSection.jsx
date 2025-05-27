export const FooterSection = () => {
  return (
    <footer className="bg-card-background py-8">
      <div className="max-w-prose mx-auto text-center">
        <p className="text-paragraph font-paragraph mb-4">
          &copy; {new Date().getFullYear()} Nicolas Gomez(NickGV). All rights reserved.
        </p>
        <p className="text-paragraph font-paragraph">
          Built with React, Tailwind CSS, and ♥
        </p>
      </div>
    </footer>
  );
};
