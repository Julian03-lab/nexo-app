import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import StatColumn from "./StatColumn";
import { PersonIconFilled } from "../../assets/icons/icons";
import { useRouter } from "expo-router";

type OfferStatsProps = {
  selectColumn: React.Dispatch<React.SetStateAction<number>>;
  column: number;
  offerId: number;
  step: number;
  columnsCount: Record<number, number>;
  applicants: {
    stepId: number;
    applicantList: {
      id: number;
      email: string;
      column: number;
    }[];
  };
};

const OfferStats = ({
  column,
  selectColumn,
  offerId,
  step,
  columnsCount,
  applicants,
}: OfferStatsProps) => {
  const router = useRouter();
  const handlePress = (columnToSelect: number) => {
    if (column === null || column !== columnToSelect) {
      selectColumn(columnToSelect);
      return;
    }
    if (column === columnToSelect) {
      selectColumn(null);
      return;
    }
  };

  return (
    <>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Roboto_400Regular",
          color: "#000",
          textAlign: "center",
        }}
      >
        A continuación, te presentamos las estadísticas de los aspirantes que se
        postularon.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            alignSelf: "flex-end",
            marginBottom: 14,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
              paddingVertical: 8,
            }}
          >
            Alta
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
              paddingVertical: 8,
            }}
          >
            Media
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
              paddingVertical: 8,
            }}
          >
            Baja
          </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => handlePress(1)}
            activeOpacity={0.6}
            underlayColor="transparent"
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                marginBottom: 4,
                backgroundColor: "#fff",
                borderRadius: 100,
                borderWidth: 1,
                borderColor:
                  column === null || column === 1 ? "#FF6584" : "#E3E3E3",
                elevation: 2,
              }}
            >
              <PersonIconFilled
                fill={column === null || column === 1 ? "#FF6584" : "#E3E3E3"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto_700Bold",
                  color:
                    column === null || column === 1 ? "#FF6584" : "#E3E3E3",
                }}
              >
                {columnsCount["1"] || 0}
              </Text>
            </View>
          </TouchableHighlight>
          <StatColumn
            color={column === null || column === 1 ? "#FF6584" : "#E3E3E3"}
            percent={20}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
            }}
          >
            20%
          </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => handlePress(2)}
            activeOpacity={0.6}
            underlayColor="transparent"
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                marginBottom: 4,
                backgroundColor: "#fff",
                borderRadius: 100,
                borderWidth: 1,
                borderColor:
                  column === null || column === 2 ? "#FFE665" : "#E3E3E3",
                elevation: 2,
              }}
            >
              <PersonIconFilled
                fill={column === null || column === 2 ? "#FFE665" : "#E3E3E3"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto_700Bold",
                  color:
                    column === null || column === 2 ? "#FFE665" : "#E3E3E3",
                }}
              >
                {columnsCount["2"] || 0}
              </Text>
            </View>
          </TouchableHighlight>
          <StatColumn
            color={column === null || column === 2 ? "#FFE665" : "#E3E3E3"}
            percent={40}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
            }}
          >
            40%
          </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => handlePress(3)}
            activeOpacity={0.6}
            underlayColor="transparent"
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                marginBottom: 4,
                backgroundColor: "#fff",
                borderRadius: 100,
                borderWidth: 1,
                borderColor:
                  column === null || column === 3 ? "#BEED5B" : "#E3E3E3",
                elevation: 2,
              }}
            >
              <PersonIconFilled
                fill={column === null || column === 3 ? "#BEED5B" : "#E3E3E3"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto_700Bold",
                  color:
                    column === null || column === 3 ? "#BEED5B" : "#E3E3E3",
                }}
              >
                {columnsCount["3"] || 0}
              </Text>
            </View>
          </TouchableHighlight>
          <StatColumn
            color={column === null || column === 3 ? "#BEED5B" : "#E3E3E3"}
            percent={60}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
            }}
          >
            60%
          </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => handlePress(4)}
            activeOpacity={0.6}
            underlayColor="transparent"
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                marginBottom: 4,
                backgroundColor: "#fff",
                borderRadius: 100,
                borderWidth: 1,
                borderColor:
                  column === null || column === 4 ? "#5BEDB0" : "#E3E3E3",
                elevation: 2,
              }}
            >
              <PersonIconFilled
                fill={column === null || column === 4 ? "#5BEDB0" : "#E3E3E3"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto_700Bold",
                  color:
                    column === null || column === 4 ? "#5BEDB0" : "#E3E3E3",
                }}
              >
                {columnsCount["4"] || 0}
              </Text>
            </View>
          </TouchableHighlight>
          <StatColumn
            color={column === null || column === 4 ? "#5BEDB0" : "#E3E3E3"}
            percent={80}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
            }}
          >
            80%
          </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => handlePress(5)}
            activeOpacity={0.6}
            underlayColor="transparent"
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                marginBottom: 4,
                backgroundColor: "#fff",
                borderRadius: 100,
                borderWidth: 1,
                borderColor:
                  column === null || column === 5 ? "#5BE4ED" : "#E3E3E3",
                elevation: 2,
              }}
            >
              <PersonIconFilled
                fill={column === null || column === 5 ? "#5BE4ED" : "#E3E3E3"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto_700Bold",
                  color:
                    column === null || column === 5 ? "#5BE4ED" : "#E3E3E3",
                }}
              >
                {columnsCount["5"] || 0}
              </Text>
            </View>
          </TouchableHighlight>
          <StatColumn
            color={column === null || column === 5 ? "#5BE4ED" : "#E3E3E3"}
            percent={100}
            end
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Roboto_700Bold",
            }}
          >
            100%
          </Text>
        </View>
      </View>
      {column &&
        columnsCount[column] &&
        applicants.applicantList.length > 2 && (
          <TouchableHighlight
            onPress={() =>
              router.push({
                pathname: "/recruiter/home/applicants/filterApplicants",
                params: { column, offerId, step },
              })
            }
            style={styles.button}
            underlayColor="rgba(31, 34, 105, 0.20)"
          >
            <Text
              style={{
                color: "#1F2269",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
              }}
            >
              Filtrar
            </Text>
          </TouchableHighlight>
        )}
    </>
  );
};

export default OfferStats;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 8,
    borderColor: "#1F2269",
    borderWidth: 1,
    width: "100%",
  },
});
