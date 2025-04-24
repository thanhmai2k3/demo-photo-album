// components/MyImage.tsx

type MyImageProps = {
    ids: string[];
};

export default function MyImage({ ids }: MyImageProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {ids.map((id) => (
                <img key={id} src={"https://lh3.googleusercontent.com/d/" + id} alt="Đang tải ảnh ..."/>
                // <img
                //     key={id}
                //     src={`https://lh3.googleusercontent.com/d/${id}`}
                //     alt="Đang tải ảnh ..."
                //     className="rounded shadow max-w-full h-auto"
                // />
            ))}
        </div>
    );
}
