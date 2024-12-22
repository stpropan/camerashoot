import Image from "next/image";
import BorderBorttomLink from "./components/BorderBorttomLink";
import PrefItem from "./components/PrefItem";
import Button from "./components/Button";
import PhotoGrid from "./components/PhotoGrid";
import Corners from "./components/Corners";

const links = [
  {
    name: "Функция",
    href: "#"
  },
  {
    name: "Характеристики",
    href: "#"
  },
  {
    name: "Галерея",
    href: "#"
  },
  {
    name: "Отзывы",
    href: "#"
  },
  {
    name: "Аксессуары",
    href: "#"
  },
];

const prefItems = [
  {
    image: "/images/focus.svg",
    alt: "focus",
    title: "Автофокусировка:",
    desc: "Dual Pixel CMOS AF для мгновенной и точной фокусировки",
  },
  {
    image: "/images/cp.svg",
    alt: "cp",
    title: "Процессор DIGIC 8:",
    desc: "Быстрая обработка и яркие детализированные фотографии",
  },
  {
    image: "/images/detect.svg",
    alt: "detect",
    title: "Распознавание:",
    desc: "Идеальные портреты с надежным отслеживанием",
  },
  {
    image: "/images/eye.svg",
    alt: "eye",
    title: "Авторизация:",
    desc: "Высокое качество фокусировки в любых условиях",
  },
  {
    image: "/images/landscape.svg",
    alt: "landscape",
    title: "Обработка:",
    desc: "Встроенная обработка для снимков",
  },
  {
    image: "/images/photo.svg",
    alt: "photo",
    title: "Ручной фокус:",
    desc: "Сенсорный экран упрощает процесс настройки фокуса",
  },
];

const prosses = [
  {
    image: "images/matrix.svg",
    alt: "matrix",
    text: "32.5 Мп CMOS-матрица для детализированных снимков",
  },
  {
    image: "images/camera.svg",
    alt: "camera",
    text: "Видео 4K без обрезки кадра",
  },
  {
    image: "images/grid.svg",
    alt: "grid",
    text: "Скорость съемки 10 кадров/с",
  },
  {
    image: "images/lens.svg",
    alt: "lens",
    text: "Поддержка объективов Canon EF и EF-S, оптимизированных для разных жанров съемки (портреты, пейзажи и макро)",
  },
];

const photos = [
  {
    src: "/images/photos/photo-4.png",
    alt: "photo4",
  },
  {
    src: "/images/photos/photo-3.jpg",
    alt: "photo3",
  },
  {
    src: "/images/photos/photo-2.png",
    alt: "photo2",
  },
  {
    src: "/images/photos/photo-1.jpg",
    alt: "photo1",
  },
]

export default function Home() {
  return (
    <>
      <main>
        <header className="fixed text-white w-full h-[100px] z-10 bg-[#000000d0]">
          <div className="container h-full flex items-center justify-between mx-auto">
            <div className="flex items-end gap-4 text-3xl font-bold">
              <Image
                src={'/images/logo.svg'}
                width={51}
                height={51}
                alt="camera"
                className="w-[51px] h-[51px]"
              />
              Canon EOS 90D
            </div>
            <div className="flex gap-10">
              {
                links.map((link, index) => {
                  return <BorderBorttomLink name={link.name} href={link.href} key={index} />
                })
              }
            </div>
          </div>
        </header>
        <div className="h-[1000px] relative" id="section-1">
          <div className="flex h-full w-full absolute -z-10">
            <div className="bg-black w-7/12"></div>
            <div className="bg-gradient-to-b from-primary to-primaryDark w-5/12"></div>
          </div>
          <div className="container mx-auto flex h-full items-center pt-16">
            <div className="text-white w-1/2 flex flex-col items-start justify-center h-full gap-12">
              <div className="text-9xl uppercase">
                Поймай каждый момент
              </div>
              <div className="bg-gray p-3 w-fit font-thin text-xl">
                Высокое разрешение, быстрая<br />автофокусировка, видео в формате 4K
              </div>
              <div className="flex items-center gap-10">
                <Button text="Купить" alt={false} />
                <div className="text-6xl whitespace-nowrap bg-gradient-to-r from-primary to-primaryDarkest bg-clip-text text-transparent font-bold">
                  130 000 Р
                </div>
              </div>
            </div>
            <div className="w-1/2 -z-10 overflow-hidden">
              <Image
                src={'/images/camera-1.png'}
                width={1000}
                height={1000}
                alt="camera"
                className="absolute bottom-0 overflow-hidden top-16"
              />
            </div>
          </div>
        </div>
        <div className="bg-white" id="section-2">
          <div className="text-a0 container mx-auto py-20 flex flex-col items-center justify-center gap-10">
            <div className="text-6xl font-bold bg-gradient-to-r from-b5 to-a0 bg-clip-text text-transparent">
              Функции и технологии
            </div>
            <div className="text-xl text-center">
              Ознакомтесь с особыми и уникальными возможностями<br />нашей камеры и убедитесь в ее эффективности
            </div>
            <div className="grid grid-cols-3 gap-y-12 gap-x-8">
              {
                prefItems.map((elem, index) => {
                  return <PrefItem image={elem.image} alt={elem.alt} title={elem.title} desc={elem.desc} key={index} />
                })
              }
            </div>
            <Button text="Подробнее" alt={true} />
          </div>
        </div>
        <div id="section-3" className="relative">
          <Image
            src="/images/sand-bg.png"
            alt="bg-sand"
            width={500}
            height={500}
            className="absolute h-full w-full -z-10 blur-lg brightness-50"
          />
          <div className="h-[800px] mx-auto flex justify-center container py-10 relative">
            <div className="w-1/2 -z-10 flex justify-center items-center">
              <Image
                src="/images/camera-2.png"
                alt="camera"
                width={500}
                height={500}
                className="absolute w-[800px] -left-10 -z-10"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-10">
              <div className="text-white bg-gradient-to-b from-primary to-primaryDark uppercase px-8 py-4 font-bold text-6xl w-min">Основные характеристики</div>
              <div className="flex flex-col text-white pl-10 gap-10">
                {
                  prosses.map((pros, index) => {
                    return (<div key={index} className="flex gap-10 items-center">
                      <Image
                        src={pros.image}
                        width={60}
                        height={60}
                        alt={pros.alt}
                        className="w-[50px] flex-shrink-0"
                      />
                      <div>
                        {pros.text}
                      </div>
                    </div>)
                  })
                }
              </div>
              <Button text="Подробнее" alt={true} className="text-white ml-10" />
            </div>
          </div>
        </div>
        <div id="section-4">
          <div className="bg-white">
            <div className="container mx-auto py-20">
              <div className="bg-gradient-to-r from-[#939393] to-[#2D2D2D] text-6xl font-bold text-transparent bg-clip-text w-fit uppercase">Делай незабываемые<br />снимки</div>
              <div className="flex">
                <div className="grid grid-rows-2">
                  <div className="flex items-end">
                    С Canon EOS 90D вы получите возможность экспериментировать с различными настройками фокусировки, что откроет новые горизонты для вашего творчества. Создавайте яркие и запоминающиеся фотографии, которые будут радовать вас и ваших близких!
                  </div>
                  <div className="flex items-end">
                    <Button alt={true} text="Подробнее" />
                  </div>
                </div>
                <PhotoGrid photos={photos} className="flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div id="section-5">
          <div className="bg-black">
            <div className="container pt-20 mx-auto flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-[#F5F5F5] to-[#989898] text-transparent bg-clip-text text-6xl font-bold uppercase w-fit">Отзывы покупателей</div>
              <div className="bg-gradient-to-r from-[#5652523B] to-[#BCB4B43B] h-[470px] w-full flex relative text-white font-thin">
                <Corners />
                <div className="w-full flex flex-col justify-center items-center gap-1">
                  <Image
                    src="/images/photos/girl-1.jpg"
                    alt="author"
                    width={100}
                    height={100}
                    className="w-[150px] h-[150px] rounded-full mb-20"
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
              <div className="flex justify-center items-center gap-10 my-8">
                <Image
                  src="/images/arrow-left.svg"
                  alt="left arrow"
                  width={75}
                  height={75}
                />
                <div className="border border-white width w-[50px] h-[4px]"></div>
                <div className="border border-white width w-[50px] h-[4px] bg-white"></div>
                <div className="border border-white width w-[50px] h-[4px] bg-white"></div>
                <Image
                  src="/images/arrow-right.svg"
                  alt="right arrow"
                  width={75}
                  height={75}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="section-6">
          <div className="bg-white">
            <div className="container mx-auto flex flex-col justify-center items-center py-20">
              <div className="bg-gradient-to-r from-primary to-primaryDarkest w-fit text-6xl uppercase bg-clip-text text-transparent font-bold text-center">Совместимые объекты и аксессуары</div>
              <div className="grid grid-cols-3 my-10 w-full justify-items-center">
                <div className="bg-[#dddddd] flex flex-col justify-center items-center p-4 border text-center max-w-80">
                  <div>Canon EF 50mm f/1.8 STM</div>
                  <Image
                    src="/images/photos/camera-item-1.png"
                    alt="lens"
                    width={200}
                    height={200}
                  />
                  <div className="font-bold mb-4">Объектив для портретов</div>
                  <div className="font-bold">Преимущества:</div>
                  <div className="">Большая диафрагма, быстрая автофокусировка</div>
                  <div className="flex text-primaryDark mt-4 hover:cursor-pointer">
                    Подробнее
                    <Image
                      src="/images/small-arrow-right.svg"
                      alt="small arrow right"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>
                </div>
                <div className="bg-[#dddddd] flex flex-col justify-center items-center p-4 border text-center max-w-80">
                  <div>Canon EF 5Canon EF-S 18-55mm f/3.5-5.6</div>
                  <Image
                    src="/images/photos/camera-item-2.png"
                    alt="lens"
                    width={200}
                    height={200}
                  />
                  <div className="font-bold mb-4">Объектив для пейзажей</div>
                  <div className="font-bold">Преимущества:</div>
                  <div className="">Оптическая стабилизация, компактный размер</div>
                  <div className="flex text-primaryDark mt-4 hover:cursor-pointer">
                    Подробнее
                    <Image
                      src="/images/small-arrow-right.svg"
                      alt="small arrow right"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>
                </div>
                <div className="bg-[#dddddd] flex flex-col justify-center items-center p-4 border text-center max-w-80">
                  <div>Ремень для камеры Canon E1</div>
                  <Image
                    src="/images/photos/camera-item-3.png"
                    alt="lens"
                    width={200}
                    height={200}
                  />
                  <div className="font-bold mb-4">Комфортный ремень для переноски камеры</div>
                  <div className="font-bold">Преимущества:</div>
                  <div className="">Регулируемая длина, мягкая подкладка</div>
                  <div className="flex text-primaryDark mt-4 hover:cursor-pointer">
                    Подробнее
                    <Image
                      src="/images/small-arrow-right.svg"
                      alt="small arrow right"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>
                </div>
              </div>
              <Button text="Смотреть все" alt={true} />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-a0">
        <div className="container text-white py-6 mx-auto">
          <div className="flex h-[180px] font-thin justify-between">
            <div className="flex flex-col justify-between w-8/12">
              <div className="flex justify-between items-center">
                <BorderBorttomLink name="Главная" />
                <BorderBorttomLink name="Функции" />
                <BorderBorttomLink name="Основные характеристики" />
                <BorderBorttomLink name="Аксессуары" />
                <BorderBorttomLink name="Отзывы" />
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Canon EOS 90D</div>
                <div className="">Canon, 2024, все права защищены</div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-2/12">
              <div className="flex flex-col">
                <a className="cursor-pointer hover:text-primary duration-300" href="tel:89800111010">+7(980)-011-10-10</a>
                <a className="cursor-pointer hover:text-primary duration-300" href="mailto:canon@gmail.com">canon@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <div>Социальные сети</div>
                <div className="flex items-center gap-4">
                  <a href="https://www.instagram.com/">
                    <Image
                      src="/images/instagram.svg"
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="https://vk.com/">
                    <Image
                      src="/images/vk.svg"
                      alt="vk"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="https://telegram.org/">
                    <Image
                      src="/images/tg.svg"
                      alt="tg"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="https://www.whatsapp.com/">
                    <Image
                      src="/images/wa.svg"
                      alt="wa"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
