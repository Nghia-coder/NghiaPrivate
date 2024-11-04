import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';
export default function HomePage() {
  return <>
    <section className='top-bar'>
      <div className='container d-flex'>
        <div classname='me-5'>Thông tin cho</div>
        <div classname='me-5'>Sinh viên tương lai</div>
        <div classname='me-5'>Sinh viên đang học</div>
        <div classname='me-5'>Phụ Huynh</div>
        <div classname='me-5'>Cán bộ & Giảng Viên</div>
        <div classname='me-5'>Cựu Sinh Viên</div>
        <div classname='me-5'>English</div>
        <div className='profile'>Trang cá nhân</div>
        <div className='me-3 cursor-pointer'>Search</div>
        
      </div>
      <section className='header'>
        <div className='container d-flex'>
          <img src="Mewo.jpg" alt="" height={40} />
          <div className='title cursor-poiter px-2'>Giới Thiệu</div>
          <div className='title cursor-poiter px-2'>Chương Trình Đào Tạo</div>
          <div className='title cursor-poiter px-2'>Tuyển Sinh</div>
          <div className='title cursor-poiter px-2'>Nghiên Cứu</div>
          <div className='title cursor-poiter px-2'>Liên Hệ</div>
        </div>
      </section>
      
      <section>
        
      </section>
      

    </section>
  </>
}