export const About = () => {
  return <section id="about" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-semibold text-center mb-8 text-charcoal">About</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-lg">
              <div className="space-y-6 text-lg font-inter font-light leading-relaxed text-charcoal/80">
                <p>
                  With over a decade of experience in design, I specialize in creating spaces
                  that seamlessly blend functionality with aesthetic excellence. My approach
                  centers on understanding the unique needs of each client and translating
                  their vision into reality.
                </p>
                <p>
                  Every project is an opportunity to push creative boundaries while maintaining
                  a commitment to timeless design principles. I believe great design should
                  enhance the way people live and work, creating environments that inspire
                  and endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};