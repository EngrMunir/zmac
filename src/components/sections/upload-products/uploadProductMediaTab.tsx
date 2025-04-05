import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { ProductUploadTabPropsType } from "./uploadProductGeneralTab";
import ImgUpload, { ImgUploadType } from "@/components/ui/img-upload";


const UploadProductMediaTab = ({ handleChangeEvent, setFromValue, fromValue }: ProductUploadTabPropsType) => {

    function handleThumbnailChange(e: ImgUploadType[]) {
        setFromValue((prev) => ({ ...prev, 'thumbnail': e }))
    }

    function handleGalleryChange(e: ImgUploadType[]) {
        setFromValue((prev) => ({ ...prev, 'gallery': e }))
    }

    function handlePdfChange(e: ImgUploadType[]) {
        setFromValue((prev) => ({ ...prev, 'pdf_specification': e }))
    }

    return (
        <div>
            <div className='flex-1 flex flex-col gap-4'>
                <div className='grid grid-cols-[35%_auto]'>
                    <span className='capitalize text-sm inline-block mb-1'>Thumbnail Image<span className='text-red-600'>*</span></span>
                    <ImgUpload
                        inputId="thumbnail"
                        onImgChange={handleThumbnailChange}
                    />
                </div>

                <div className='grid grid-cols-[35%_auto]'>
                    <span className='capitalize text-sm inline-block mb-1'>Gallery Images</span>
                    <ImgUpload
                        inputId="gallery"
                        isMultiple={true}
                        onImgChange={handleGalleryChange}
                    />
                </div>
                <div className='grid grid-cols-[35%_auto]'>
                    <span className='capitalize text-sm inline-block mb-1'>PDF Specification</span>
                    <ImgUpload
                        inputId="pdf_specification"
                        isMultiple={true}
                        isPDFShow={true}
                        accept="application/pdf"
                        onImgChange={handlePdfChange}
                    />
                </div>
                <div className='grid grid-cols-[35%_auto]'>
                    <label htmlFor="video-provider" className='capitalize text-sm inline-block mb-1'>Video Provider</label>
                    <Select onValueChange={(value) => setFromValue((prev) => ({ ...prev, 'video_provider': value }))}>
                        <SelectTrigger className="w-full h-11 rounded-sm text-accent-foreground capitalize" id='video-provider'>
                            <SelectValue placeholder={fromValue.video_provider} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="youtube" className='py-3'>Youtube</SelectItem>
                            <SelectItem value="dailymotion" className='py-3'>Dailymotion</SelectItem>
                            <SelectItem value="vimeo" className='py-3'>vimeo</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='grid grid-cols-[35%_auto]'>
                    <label htmlFor="video-link" className='capitalize text-sm inline-block mb-1'>Video Link</label>
                    <div>
                        <Input type="url" className='h-11 text-sm text-accent-foreground' id='video-link' name="video_link" onChange={handleChangeEvent} />
                        <small className='text-[10px] text-accent-foreground'>Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadProductMediaTab