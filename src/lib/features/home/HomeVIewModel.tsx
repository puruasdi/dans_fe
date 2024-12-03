"use client";

import { DataDto } from "@/lib/model/apiModel";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import type { FormProps } from "antd";
import { useRouter } from "next/navigation";
import { LoadingContext } from "@/lib/contexts/loadingContext";
import { UserContext } from "@/lib/contexts/userContext";

type FieldType = {
  description?: string | undefined;
  location?: string | undefined;
  full_time?: boolean | undefined;
};

const useHomeVM = () => {
  const router = useRouter();
  const { setLoading } = useContext(LoadingContext);
  const { setProfile } = useContext(UserContext);
  const [data, setData] = useState<DataDto[] | []>([]);
  const [apiLoading, setApiLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<FieldType>({});
  const [selectedData, setSelectedData] = useState<DataDto | null>(null);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setData([]);
    setHasMore(true);
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined)
    );
    setPage(1);
    setFilter(filteredData);
  };

  const loadMoreData = () => {
    if (apiLoading) {
      return;
    }
    setApiLoading(true);

    axios
      .get("https://dev6.dansmultipro.com/api/recruitment/positions.json", {
        params: {
          ...filter,
          page: page,
        },
      })
      .then((response) => {
        const newData: DataDto[] = [];

        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i]) {
            newData.push(response.data[i]);
          }
        }

        setPage(page + 1);
        setTimeout(() => {
          if (newData.length < 10) {
            setHasMore(false);
          }
          if (!selectedData) {
            setSelectedData(newData[0]);
          }
          setData([...data, ...newData]);
          setApiLoading(false);
        }, 2000);
      })
      .catch(() => {
        setTimeout(() => {
          setHasMore(false);
          setHasMore(false);
          setApiLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, [filter]);

  useEffect(() => {
    setLoading(true);
    if (sessionStorage.getItem("tk")) {
      console.log("jalan");

      const token = sessionStorage.getItem("tk");
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          setLoading(false);
          loadMoreData();
        })
        .catch(() => router.replace("/"));
    } else {
      setLoading(false)
      router.replace("/");
    }
  }, []);

  return {
    data,
    loadMoreData,
    hasMore,
    onFinish,
    setSelectedData,
    selectedData,
  };
};

export default useHomeVM;
