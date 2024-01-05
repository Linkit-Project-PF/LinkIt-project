import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../../../../redux/features/ReviewsSlice";
import HeadReviews from "./HeadReviews";
import { ReviewProps, ViewReviewProps } from "../../../admin.types";
import { IUser } from "../../../../Profiles/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { t } from "i18next";

type stateProps = {
    Authentication: { user: IUser },
    reviews: {
        allReviews: ReviewProps[]
    }
};

export default function Reviews() {
    const dispatch = useDispatch();
    const token = useSelector((state: stateProps) => state.Authentication.user._id)
    const data = useSelector((state: stateProps) => state.reviews.allReviews);



    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataToShow = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const [viewCol, setViewCol] = useState<ViewReviewProps>({
        _id: false,
        name: true,
        rol: true,
        country: true,
        detail: true,
        archived: true,
    })


    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/reviews/find",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Accept-Language': sessionStorage.getItem('lang')
                        }
                    }
                );
                dispatch(setReviews(response.data));
            } catch (error) {
                console.error(t("Error al cargar las reseñas"), error);
            }
        };
        loadData();
    }, []);

    const handleNext = (): void => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevius = (): void => {
        setCurrentPage(currentPage - 1);
    };

    const hideCol = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name } = e.target
        setViewCol((prevViewCol) => ({
            ...prevViewCol,
            [name]: !prevViewCol[name as keyof typeof prevViewCol],
        }))
    }

    const renderSectionBasicCap = <K extends keyof ReviewProps>(title: string, key: K,) => (
        <div>
            <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-96 border-linkIt-200'>
                <h1>{title}</h1>
            </div>
            <div>
                {dataToShow.map((r: ReviewProps, index) => (
                    <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-96 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
                ))}
            </div>
        </div>
    )

    const renderSectionBasic = <K extends keyof ReviewProps>(title: string, key: K,) => (
        <div>
            <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2 w-96 border-linkIt-200'>
                <h1>{title}</h1>
            </div>
            <div>
                {dataToShow.map((r: ReviewProps, index) => (
                    <p key={`${key}-${index}`} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-96 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
                ))}
            </div>
        </div>
    )

    const renderSectionActive = <K extends keyof ReviewProps>(title: string, key: K,) => (
        <div>
            <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-96 border-linkIt-200'>
                <h1>{title}</h1>
            </div>
            <div>
                {dataToShow.map((r: ReviewProps, index) => (
                    <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-96 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === true ? 'Oculto' : 'Visible')}</p>
                ))}
            </div>
        </div>
    )

    return (
        <div className="bg-linkIt-500 mx-12 rounded-[20px] rounded-b-none w-auto">
            <HeadReviews
                hideCol={hideCol}
                viewCol={viewCol}
            />
            <div className='flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg'>
                {viewCol._id && renderSectionBasic("ID", "_id")}
                {viewCol.name && renderSectionBasicCap("Nombre", "name")}
                {viewCol.rol && renderSectionBasicCap("Rol", "rol")}
                {viewCol.country && renderSectionBasicCap("País", "country")}
                {viewCol.detail && renderSectionBasic("Detalle", "detail")}
                {viewCol.archived && renderSectionActive("Estado", "archived")}
            </div>
            <div className="flex flex-row justify-around">
                <button
                    className="cursor-pointer hover:text-linkIt-300"
                    onClick={handlePrevius}
                    disabled={currentPage === 0}
                >
                    Anterior
                </button>
                <span className='text-center'>
                    Pagina {currentPage + 1} de {totalPages}
                </span>
                <button
                    className="cursor-pointer hover:text-linkIt-300"
                    onClick={handleNext}
                    disabled={endIndex >= data.length}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}
