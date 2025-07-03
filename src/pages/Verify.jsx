import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

function Verify() {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.post(`${url}/api/order/verify`, {
          success,
          orderId,
        });

        if (response.data.success) {
          navigate("/myorders");
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error("Payment verification failed:", err);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    // Only verify if params exist
    if (success && orderId) {
      verifyPayment();
    } else {
      navigate("/");
    }
  }, [success, orderId, navigate, url]);

  // Show spinner while verifying
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 border-solid"></div>
      </div>
    );
  }

  // This will not be seen due to navigate(), but is safe fallback
  return null;
}

export default Verify;
