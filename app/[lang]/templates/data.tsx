import { LandingPreview } from "../components/LandingPreview";
import { DataPreview } from "../components/DataPreview";

const templatesData = [
  {
    id: "landing",
    name: "Лендинг",
    description: "Создайте информационное и интерактивное сайт или приложение",
    about:
      "Во всех интерфейсах, как правило, преобладают не слишком нагруженные интерактивом и функциями страницы - текстовые документы, экраны описаний и представлений, страницы-визитки, дашборды и различные многофункциональные главные экраны больших приложений. Для создания всех этих интерфейсов мы создали EQUIX/Лендинг - самый простой в инспользовании и функционале, но при этом самый масштабный и универсальный шаблон, предоставляющий каркасы главных страниц (с шапкой и подвалом), боковые меню для навигации по однотипным страницам, блоки и карточки для текстов и медиа-контента (изображений, видео, аудио и т.д.) и многое другое.",
    ExampleComponent: LandingPreview,
  },
  {
    id: "blog",
    name: "Блог",
    description: "Создайте новостной портал, блог или форум",
    about:
      "Блог (интернет-журнал событий, интернет-дневник), как и новостной портал и форум - веб-сайт, основное содержимое которого - регулярно добавляемые пользователями записи, содержащие текст, изображения или мультимедиа. Шаблон EQUIX/Блог предоставляет все основные компоненты, из которых состоит такой сайт: каталог новостей/записей/постов/сообщений/иных публикаций; отдельная страница каждой публикации; страница для создания публикации; личный кабинет с авторизацией.",
  },
  {
    id: "data",
    name: "Данные",
    description:
      "Создайте файловый менеджер, админ-панель или систему управления базами данных",
    about:
      "Поскольку любое ПО чаще всего используется не для простого получения информации, а для какого-то взаимодействия с ней и обработки данных, самыми важными экранами/страницами являются те, что содержат функции, интерактивное наполнение. Их примерами являются как простое меню для навигации по сайту и форма регистрации, так и полноценные файловые менеджеры, админ-панели, дашборды с метрикой, системы управления базами данных, CRM, CMS, SAAS и т.д. EQUIX/Данные - самый сложный и важный наш продукт, в рамках которого были разработаны сотни компонентов и функций для любого интерактива - поля для ввода разных данных, их формы, решения для навигации, но главное - алгоритмы для автоматической генерации по данным в JSON-форматах страниц, позволяющих всячески эти данные изменять.",
    ExampleComponent: DataPreview,
  },
  {
    id: "shop",
    name: "Магазин",
    description:
      "Создайте интернет-магазин или приложение для оформления и оплаты услуг",
    about:
      "Сайты и приложения коммерческого типа, пожалуй, являются наиболее приносящими прибыль по сравнению с любыми другими типами, поэтому для любой компании и любого проекта в этой области критически важна скорость разработки и работы ее результата, отказоустойчивость и понятность для пользователей. EQUIX/Магазин преимущественно фокусируется на технической стороне вопроса - оптимизации изображений, SEO, загрузке страниц, отзывчивости и понятности происходящего для пользователя, а также предлагает основные компоненты таких приложений - интерактивные карточки и их блоки, корзину, форму эквайринга, а также баннеры и секции, подходящие для рекламных и иных предложений.",
  },
];

export default templatesData;
