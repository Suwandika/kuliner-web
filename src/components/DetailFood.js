import React from 'react';

const DetailFood = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/2 px-4">
                <h2 className="text-xl text-white font-bold mb-2">Nama Makanan</h2>
                <div className="bg-[#323443] rounded-[20px]">
                    <p className="text-slate-400 mb-4 md:mr-20 ml-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        ultrices augue ac neque facilisis, in consectetur justo cursus.
                        Integer sed quam eu lorem eleifend luctus. Curabitur nec nibh nec
                        arcu ultricies convallis. Ut placerat nisi at magna lacinia, nec
                        consectetur velit sollicitudin. Sed sollicitudin lorem et elit
                        tincidunt,.
                    </p>
                </div>
            </div>
            <div className="w-1/2">
                <img
                src={babiGulingImage}
                alt="Makanan"
                className="w-[450px] h-[350px] rounded-[50px] pt-4"
                />
            </div>
        </div>
    );
}

export default DetailFood;