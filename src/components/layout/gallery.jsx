import Container from '../ui/container.jsx';

export default function Gallery({
    name,
    role,
    bio,
    img,
    className = ''
}) {
    return ( 
            <div className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer">

                {/* Imagen */}
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Nombre siempre visible (desaparece en hover) */}
                <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                    <p className="text-white text-sm font-medium leading-tight">{name}</p>
                    <p className="text-white/60 text-xs mt-0.5">{role}</p>
                </div>

                {/* Overlay con info (aparece en hover) */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/80 opacity-0 transition-opacity duration-350 group-hover:opacity-100">
                    <p className="text-white font-semibold text-lg leading-tight mb-0.5">{name}</p>
                    <p className="text-[#C9D755] text-sm font-medium uppercase tracking-wider mb-2">{role}</p>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">{bio}</p>
                    
                </div>
            </div>
    );
}