export default function Body() {
  return (
    <div className="">
      <section className="pt-10 pb-10 max-w-lg mx-auto">
        <div className="container">
          <div className="flex justify-between p-3 text-slate-400">
            <p>Level: 1</p>
            <p>Complete 10 Quest for level up</p>
            <p>Exp: 0</p>
          </div>

          <div className="pt-10">
            <h1 className="text-center text-2xl mb-3 text-primary text-shadow-lg text-shadow-highlight">
              Create <span className="font-serif font-bold">Quest</span>
            </h1>
          </div>

          <div className="shadow-lg rounded-lg px-4 py-4 w-full">
            <div className="">
              <form action="" method="post">
                <div className="mb-3">
                  <p className="text-secondary">Buatlah Quest:</p>
                  <input
                    type="text"
                    name="quest-input"
                    id="quest-input"
                    placeholder="Quest Title..."
                    className="bg-slate-200 rounded-lg h-10 w-full"
                  />
                </div>

                <div className="mb-5">
                  <p className="text-secondary">Detail Quest:</p>
                  <input
                    type="text"
                    name="quest-detail-input"
                    id="quest-input"
                    placeholder="Quest Description..."
                    className="bg-slate-200 rounded-lg h-10 w-full"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-linear-30/oklch from-primary via-indigo-400 to-accent w-full text-highlight hover:border hover:bg-highlight hover:border-accent hover:text-accent"
                >
                  Accept Quest
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-row gap-3">
            <button className="button-secondary">All(0)</button>
            <button className="button-secondary">In Progres(0)</button>
            <button className="button-secondary">Complete(0)</button>
          </div>
        </div>
      </section>
    </div>
  );
}
