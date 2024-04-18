import Section from "../../components/Section";

const Data = () => {
  return (
    <Section className="flex items-center justify-center">
        <div className="mt-20 flex flex-col max-w-[62rem] border border-n-15 shadow-md shadow-neutral-100/60 rounded-xl items-center justify-between">
          <p className="body-1 mx-6 my-6 text-n-14 lg:mb-8 font-normal">
              We collect, host and provide well validated datasets to researchers and industries in critical domains such as languages, agriculture and healthcare in the continent. If you would like to access our data hub or work with us, please send us an email to <span className="text-n-16">info@datawise.africa</span>.
          </p>
        </div>
    </Section>
  )
}

export default Data