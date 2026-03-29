import Container from '../ui/container.jsx';
import Button from '../ui/button.jsx';

export default function Hero({
    titleA,
    titleB,
    titleSize,
    description,
    buttontxt,
    colorHighlight,
    onCtaClick,
    className = ''
}) {
    return (
        <Container variant='default' className={`flex gap-10 items-center justify-center ${className} relative z-10`}>
            <div className="text-center lg:text-center">
                <h1 className={`text-4xl md:text-5xl ${titleSize} font-extrabold tracking-tight text-white mb-4`}>
                    {titleA} <span className={`text-[${colorHighlight}]`}>{titleB}</span>
                </h1>

                {description && (
                    <p className="text-gray-100 mb-6">
                        {description}
                    </p>
                )}

                {onCtaClick && (
                    <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-center">
                        <Button onClick={onCtaClick} variant='outline'>
                            {buttontxt}
                        </Button>
                    </div>
                )}
            </div>
        </Container>
    );
}