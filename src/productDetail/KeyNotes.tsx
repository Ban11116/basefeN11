import React from 'react'

const KeyNotes = () => {
    return (
        <>
            <div className="bg-[#2a2a2a] w-full">
                <div className="max-w-6xl mx-auto px-6 pt-0 pb-12">
                    <h2 className="text-white text-2xl mb-8 text-left">
                        Key Notes
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-12">
                        <div className="text-center max-w-xs">
                            <p className="text-sm text-white mb-2">
                                Top Note
                            </p>
                            <p className="text-sm text-white mb-6">
                                Citrus Accord, Sun-kissed Fruits
                            </p>
                            <img alt="A round image of a fruits basket with oranges, grapes, and other sun-kissed fruits" className="w-40 h-40 rounded-full object-cover mx-auto" height="160" src="https://storage.googleapis.com/a1aa/image/706fffda-bf0e-4539-06bf-bb6981babb52.jpg" width="160" />
                        </div>
                        <div className="text-center max-w-xs">
                            <p className="text-sm text-white mb-2">
                                Heart Note
                            </p>
                            <p className="text-sm text-white mb-6">
                                Golden Roses, Rare Blooms
                            </p>
                            <img alt="A round image of white and golden roses in soft focus" className="w-40 h-40 rounded-full object-cover mx-auto" height="160" src="https://storage.googleapis.com/a1aa/image/b9b8e526-4e1e-40c5-ef31-f2ce26fed85f.jpg" width="160" />
                        </div>
                        <div className="text-center max-w-xs">
                            <p className="text-sm text-white mb-2">
                                Base Note
                            </p>
                            <p className="text-sm text-white mb-6">
                                Amber, Vanilla, Sandalwood
                            </p>
                            <img alt="A round image showing amber and sandalwood powder with a wooden spoon" className="w-40 h-40 rounded-full object-cover mx-auto" height="160" src="https://storage.googleapis.com/a1aa/image/190c33cf-db93-464f-25fb-2fc8cf6b808f.jpg" width="160" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyNotes