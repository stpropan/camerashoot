'use client';
import Image from "next/image";
import Slider from "react-slick";
import Corners from "./Corners";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="bg-gradient-to-r from-[#5652523B] to-[#BCB4B43B] lg:h-[470px] w-full relative text-white font-thin lg:p-0 p-10 slider-container">
            <Corners />
            <Slider {...settings}>
                <div>
                    <div className="flex lg:flex-row flex-col">
                        <div className="w-full flex flex-col justify-center items-center gap-1">
                            <Image
                                src="/images/photos/girl-1.jpg"
                                alt="author"
                                width={100}
                                height={100}
                                className="w-[150px] h-[150px] rounded-full lg:mb-20 mb-4 object-cover"
                            />
                            <div className="font-bold text-2xl">Иванова Инна</div>
                            <div className="text-xl">Фотограф</div>
                        </div>
                        <div className="flex flex-col w-full pt-10 pr-20">
                            <div>
                                Купила Canon EOS 90 и впечатлён качеством снимков. Особенно радует:
                            </div>

                            <div className="font-bold my-4">
                                Плюсы:
                            </div>

                            <div className="flash">
                                Превосходное качество изображения
                            </div>
                            <div className="flash">
                                Удобное управление
                            </div>
                            <div className="flash">
                                Быстрая автофокусировка
                            </div>

                            <div className="font-bold my-4">
                                Минусы:
                            </div>
                            <div className="flash">
                                Немного тяжёлая
                            </div>
                            <div className="flash">
                                Дорогие объективы
                            </div>
                            <div className="mt-4">
                                В общем, отличная камера
                                для фотографов любого уровня! Рекомендую!
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex lg:flex-row flex-col">
                        <div className="w-full flex flex-col justify-center items-center gap-1">
                            <Image
                                src="/images/photos/girl-2.png"
                                alt="author"
                                width={100}
                                height={100}
                                className="w-[150px] h-[150px] rounded-full lg:mb-20 mb-4 object-cover"
                            />
                            <div className="font-bold text-2xl">Сергей Петров</div>
                            <div className="text-xl">Контент-мейкер</div>
                        </div>
                        <div className="flex flex-col w-full pt-10 pr-20">
                            <div>
                                Купил Canon EOS 90D и остался в полном восторге от качества фото.
                            </div>

                            <div className="font-bold my-4">
                                Плюсы:
                            </div>

                            <div className="flash">
                                Чёткие и резкие изображения
                            </div>
                            <div className="flash">
                                Интуитивно понятный интерфейс
                            </div>
                            <div className="flash">
                                Отличная скорость серийной съемки
                            </div>

                            <div className="font-bold my-4">
                                Минусы:
                            </div>
                            <div className="flash">
                                Тяжеловата для длительных прогулок
                            </div>
                            <div className="flash">
                                Объективы могут быть дорогими
                            </div>
                            <div className="mt-4">
                                В целом, удивительная камера! Настоятельно рекомендую!
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex lg:flex-row flex-col">
                        <div className="w-full flex flex-col justify-center items-center gap-1">
                            <Image
                                src="/images/photos/girl-3.jpg"
                                alt="author"
                                width={100}
                                height={100}
                                className="w-[150px] h-[150px] rounded-full lg:mb-20 mb-4 object-cover"
                            />
                            <div className="font-bold text-2xl">Мария Ковалёва</div>
                            <div className="text-xl">Фотограф-любитель</div>
                        </div>
                        <div className="flex flex-col w-full pt-10 pr-20">
                            <div>
                                Приобрела Canon EOS 90D и приятно удивлена. Особенно впечатляют:
                            </div>

                            <div className="font-bold my-4">
                                Плюсы:
                            </div>

                            <div className="flash">
                                Отличная цветопередача
                            </div>
                            <div className="flash">
                                Удобное расположение кнопок
                            </div>
                            <div className="flash">
                                Эффективная система автофокуса
                            </div>

                            <div className="font-bold my-4">
                                Минусы:
                            </div>
                            <div className="flash">
                                Вес может утомлять
                            </div>
                            <div className="flash">
                                Стоимость аксессуаров
                            </div>
                            <div className="mt-4">
                                Потрясающая камера, которая подойдёт фотографам всех уровней! Определенно советую!
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
