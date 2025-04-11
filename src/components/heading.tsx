interface HeadingProps {
    heading: string;
    subheading?: string;
}

const Heading = ({ heading, subheading }: HeadingProps) => {
    return (
        <div className="flex flex-col items-center justify-center text-center text-(--text)">
            <h1 className="text-4xl font-bold">{heading}</h1>
            {subheading && (
                <p className="mt-2 text-lg text-(--color-secondary)">{subheading}</p>
            )}
        </div>
    );
}

export default Heading;
